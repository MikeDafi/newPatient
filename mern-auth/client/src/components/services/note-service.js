// 'use strict';


// package references


import * as axios from 'axios';


// db options


const baseApiUrl = 'http://localhost:5000/api';


// add note

export const addNote = (title, content, tags = [], forms) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${baseApiUrl}/notes`, {
                'title': title,
                'content': content,
                'tags': tags.join(),
                'forms' : "MICHAEL ASKNDAFI"
            })
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                console.log(error);
                reject(error.message);
            });

    });

};


// find notes


export const findNote = (id) => {

    return new Promise((resolve, reject) => {
        axios
            .get(`${baseApiUrl}/notes/${id}`)
            .then(response => {
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};


export const findNotesByTitle = (title) => {

    return new Promise((resolve, reject) => {
        axios
            .get(`${baseApiUrl}/notes?title=${title}`)
            .then(response => {
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};

export const listNotes = () => {

    return new Promise((resolve, reject) => {
        axios
            .get(`${baseApiUrl}/notes`)
            .then(response => {
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};


// remove note


export const removeNote = (id) => {

    return new Promise((resolve, reject) => {
        axios
            .delete(`${baseApiUrl}/notes/${id}`)
            .then(() => {
                resolve();
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};


// update note


export const updateNote = (note) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`${baseApiUrl}/notes`, { note })
            .then(() => {
                resolve();
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};


// exports


// export default
//     {
//         components: {
//             'addNote': addNote,
//             'findNote': findNote,
//             'findNotesByTitle': findNotesByTitle,
//             'listNotes': listNotes,
//             'removeNote': removeNote,
//             'updateNote': updateNote
//         }
//     };