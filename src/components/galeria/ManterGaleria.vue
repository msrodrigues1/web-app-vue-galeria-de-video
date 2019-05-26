<template>
  <div>
    <h1>Cadastro de Vídeo Galeria</h1>
    <div id='msg'></div>

    <div id='listagem' class="format">
      <button id='btn-exibir-formulario' type="button" class="btn btn-primary">
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
              <tr>
                <td>Código</td>
                <td>Título</td>
                <td>Video</td>
                <td>Editar</td>
                <td>Deletar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id='formulario'>
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
              <input type="file" class="form-control-file" id="arquivo" name="arquivo"/>
            </div>

            <div class="form-group">
              <video src="/" width="320" height="240" controls></video>
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
  }
}
</script>

<style scoped>
.format {
  padding-top: 10px;
  padding-bottom: 5px;
}
</style>
