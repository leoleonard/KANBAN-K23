import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// add a Note
router.route('/notes').post(NoteController.addNote);

// update a Note
router.route('/notes/:noteId').put(NoteController.updateNote);

// delete a Note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

export default router;
