```javascript
// Incorrect use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ name: 'John Doe' }, { $inc: { age: '1' } });
```