import { Types } from "mongoose";

for( let i = 0; i < 10; i++) {
    console.log( new Types.ObjectId().toString() );
}