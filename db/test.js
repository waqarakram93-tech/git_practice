import mongoose from 'mongoose'

// IIFE   Immediatley invoked function expression
(async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        // const Cat = mongoose.model('Cat', { name: String });

        // const kitty = new Cat({ name: 'Zildjian' });
        // kitty.save().then(() => console.log('meow'));
        console.log(`Connect to MongoDB @ ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }

}
)();