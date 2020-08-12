import errorHandler from 'errorhandler';
import app from './app';

let server;
app.use(errorHandler());

server = app.listen(app.get('port'), async () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
});

export default server;
