
import { sum } from "../sum";

test( "sum function should calculate sum of two numbers",()=>{
    const res=sum(4,8);

    expect(res).toBe(12);
})