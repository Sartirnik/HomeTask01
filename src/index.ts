import {app} from './app'

function bootstrap () {
    app.listen(3001, () => {
        console.log('App successfully started on port 3001')
    })
}
// vercel, Netlify, Render,
bootstrap();
//