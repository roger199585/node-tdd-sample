export default function multi(x, y){
	return x * y
}
import http from 'http'

export default async function multi_starServer() {
	let app = await new Promise((resolve, reject) => {
		let app = http.createServer(function(request, reject) {
			response.writeHead(200, {"content-Type": "text/plain"})
			var result = multi(5, 5)
				console,log("multinumber = " + result)
			response.write("multinumber = " + result)
			response.end()
		}).listen(8888)
		resolve(app)
	})
	return app
}