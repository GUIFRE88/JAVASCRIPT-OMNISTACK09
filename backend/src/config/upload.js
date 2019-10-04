const multer = require('multer') // Importa o multer para trabalhar com envio de imagens.
const path = require('path') // Importa o path para trabalhar com arquivos.

module.exports = {
	storage: multer.diskStorage({
		destination: path.resolve('__dirname','..','..','uploads'), // Método resolve é utilizado para voltar pastas na estrutura de pastas.Cada parâmetro é uma pasta que está voltando.
		filename: (req, file, cb) => {

			const ext = path.extname(file.originalname) // Retorna a extensão do arquivo adicionado.
			const name = path.basename(file.originalname, ext) // Retira a extensão do nome, retornando apenas o nome.

			cb(null, `${name}-${Date.now()}${ext}`)
		}
	})
}