import mongoose from 'mongoose';
import Note from '../models/note'

const Schema = mongoose.Schema;


const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
},
    {
        usePushEach: true 
    } 
);


function populateNotes(next) {
    this.populate('notes');
    next();
};


laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);
laneSchema.pre('remove' , function(next) {
  
    const noteId = this.notes.map(notes => notes.id);
    Note.remove({id: noteId},function() {
        console.log(arguments);
    }).exec();
    next();
})


export default mongoose.model('Lane', laneSchema);
