import {collection, doc, setDoc} from 'firebase/firestore/lite';
import { firebaseBD } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote } from './';


export const startNewNote = () => {
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;
        
        const newNote ={
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection (firebaseBD, `${uid}/journal/notas`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote (newNote));
        dispatch(setActiveNote(newNote));
    }
}