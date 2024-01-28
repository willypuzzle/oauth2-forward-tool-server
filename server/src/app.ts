import {NotFound} from 'http-errors';
import express from 'express';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import mainRouter from './routes/main';

const app = express();

app.set('views', path.join(__dirname, '..','views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/main', mainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(new NotFound('Not Found'));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
} as express.ErrorRequestHandler);

export = app;
