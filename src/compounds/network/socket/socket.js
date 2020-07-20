import clientSocket from 'socket.io-client';
import {DEPLOYED_SERVER_URL} from '../../../config/deploymentConfig';

const socket_url = `${DEPLOYED_SERVER_URL}/watch`
const socket = clientSocket(socket_url);

socket.on('connect', () => {
    console.log('socket connected');
});

socket.subscribeToData = (onData) => {
    socket.emit('sub', {state: true});

    socket.on('data', (data, cb) => {
        onData(null, data);
        const Acknowledgement = 1;
        cb(Acknowledgement);
    });

    socket.on('error', (err) => {
        onData(err);
    });
}

socket.unSubscribeToData = () => {
    socket.emit('unsub', {state: false});
}

socket.on('disconnect', () => {
    console.log('socket disconnected');
});

export default socket;