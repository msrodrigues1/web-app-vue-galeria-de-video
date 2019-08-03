<template>
  <div>
    <h1>Cadastro de Vídeo Galeria</h1>
    <div id='msg' v-html="mensagem"></div>

    <div id='listagem' class='format'  v-show="exibirListagemForm">
      <button id='btn-exibir-formulario' type="button" class="btn btn-primary"
      v-on:click="prepararFormCadastro()">
        Cadastrar
      </button>
      <br>
      <div id='galeria-listagem' class="format">
        <div class="table-responsive">
          <table class="table table-striped table-bordered table-hover table-sm">
            <thead>
              <tr>
                <th>Código</th>
                <th>Título</th>
                <th>Video</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in listagem">
                <td>{{item.id_galeria_video}}</td>
                <td>{{item.titulo}}</td>
                <td><video v-bind:src="item.caminho" width="320" height="240" controls></video></td>
                <td>Editar</td>
                <td>Deletar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id='formulario'  v-show="!exibirListagemForm">
      <div class="row">
        <div class="col-sm">
          <form method="POST" action="/" id="galeriaForm">
            <div class="form-group">
              <label for="id">Código</label>
              <input type="number" class="form-control" id="id_galeria_video"
              name="id_galeria_video" disabled="disabled"/>
            </div>

            <div class="form-group">
              <label for="titulo">Título</label>
              <input type="text" class="form-control" id="titulo"
              name="titulo" placeholder="Informe um título"/>
            </div>

            <div class="form-group">
              <label for="v-video">Vídeo</label>
              <input type="file" class="form-control-file" id="arquivo" 
              ref="arquivo" v-on:change="carregarVideo($event)"
              name="arquivo"/>
            </div>

            <div class="form-group">
              <video v-bind:src="urlVideo" width="320" height="260" controls></video>
            </div>

            <div class="form-inline">
              <button id="btn-cadastrar" type="submit" class="btn btn-primary mr-sm-2">
                Salvar
              </button>
              <button id="btn-cancelar-operacao" type="button" class="btn btn-primary">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManterGaleria',
  props: {  
  },
  data(){
    return{
      exibirListagemForm: true,
      listagem: null,
      mensagem : "",
      urlVideo: "",
      arquivoVideo: ""
    }
  },

  methods: {
    listarDados(){
      this.$galeriaService.getTodos().then(response => {
        if(response.erro){
         console.log("Deu erro");
        }else{
          this.listagem = response.dados.map(function(objeto){
            return {
              id_galeria_video: objeto.id_galeria_video,
              titulo: objeto.titulo,
              caminho: this + (objeto.caminho ? objeto.caminho.substring(1) : objeto.caminho) 
              
            }
            console.log(caminho);
          }, this.$server);
        }
      }).catch(response => {
        console.log("TEste - Deu erro");
      });
    },
    exibirMsgAlert(msg, tipo){
      let dados = "";

      if(msg == "sucesso"){
        dados = `<div class= 'alert alert-success' role='alert'>
          <strong>${msg}</strong>
        </div>`;
      } else if( tipo == "erro"){
        dados = `<div class= 'alert alert-danger' role='alert'>
          <strong>${msg}</strong>
        </div>`;
      }
      this.mensagem = dados;
    },
    limparMsgAlert(){
      this.mensagem = "";
    },
    prepararFormCadastro(){
      this.limparMsgAlert();
      this.exibirListagemForm = false;
    },
    carregarVideo(event){
      //if(event.target.files.length > 0){}
      if(this.$refs.arquivo.files.length > 0){
        const leitor = new FileReader();
        const arquivo = this.$refs.arquivo.files[0];
        leitor.readAsDataURL(arquivo);
        leitor.onload = () => {
          const dataUrl = leitor.result;
          this.urlVideo = dataUrl;
          this.arquivoVideo = arquivo;
        }
      }
    }
  },
  mounted(){
    this.listarDados();
  }
}
</script>

<style scoped>
.format {
  padding-top: 10px;
  padding-bottom: 5px;
}
</style>
