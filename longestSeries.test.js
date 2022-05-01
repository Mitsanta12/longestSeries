import { assert, expect } from "chai";
import { longestSeries } from "./longestSeries.js";

describe("Longest series",function(){
    describe("Tests with normal values of different length.", function(){
        it("should return 5 for the input : [10,5,3,3,4,9,9,9,9,9,6].", function(){
            const input = [10,5,3,3,4,9,9,9,9,9,6];
            expect(longestSeries(input)).to.be.eq(5);
        });
        it("should return 7 in a 75 elements array.",function(){
            const input = [75,1,6,6,6,4,4,4,7,7,3,3,1,1,1,1,1,8,9,9,9,9,5,5,5,5,7,4,6,6,6,6,1,1,1,1,1,1,7,6,9,9,9,9,9,5,3,3,3,3,3,2,2,8,8,8,8,8,5,2,2,2,2,1,1,1,3,3,3,3,3,3,3,8,8,7];
            assert.strictEqual(longestSeries(input), 7, "These results are not correct");
        });
        it("should return 21 in a 832 elements array.",function(){
            const input = [832,8,1,1,1,1,7,7,7,7,5,9,9,9,9,9,7,2,2,2,2,2,2,2,2,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,7,9,3,3,3,3,3,3,3,3,7,7,4,4,4,3,7,7,7,7,7,7,7,4,5,5,5,7,7,7,8,8,8,8,7,8,8,9,6,6,6,6,1,1,1,1,4,4,4,4,9,9,6,6,7,7,4,4,4,4,4,4,4,4,2,2,6,6,2,2,2,2,6,6,6,6,9,3,3,3,3,8,8,8,8,4,2,6,6,1,8,8,8,8,8,3,3,6,7,7,2,2,4,4,5,5,5,5,5,8,8,7,7,7,7,7,7,1,1,1,1,4,4,4,4,4,4,4,4,4,4,9,9,8,8,8,8,8,3,3,3,3,3,3,3,3,4,4,4,8,8,8,8,8,8,8,8,6,4,4,8,8,9,9,9,9,7,4,2,2,3,3,3,1,1,1,1,1,3,2,3,3,3,3,3,7,9,9,7,7,7,7,1,3,3,3,9,9,9,9,8,8,8,8,8,8,2,4,4,3,3,3,3,8,2,2,2,2,2,1,1,1,1,3,8,8,8,8,9,1,1,1,4,4,4,4,7,9,9,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,5,5,5,1,1,1,1,1,1,1,7,7,7,9,9,3,3,2,2,2,5,5,5,3,7,9,9,1,1,4,4,4,9,9,9,9,7,7,7,5,4,3,8,8,3,3,3,3,3,3,3,3,3,2,8,8,8,8,8,8,8,9,1,1,1,1,3,3,3,8,8,8,8,7,6,7,7,7,1,1,1,1,5,5,5,8,8,2,2,4,4,4,4,4,4,4,1,1,7,7,7,7,3,3,3,3,3,3,3,3,9,7,7,7,7,7,7,7,1,1,1,1,1,7,7,3,3,3,3,3,9,8,8,8,8,8,8,5,3,3,8,4,4,4,9,6,7,7,7,6,6,6,6,7,7,7,2,2,2,2,5,2,6,2,2,3,3,3,3,3,1,8,3,2,2,8,8,8,8,8,8,8,8,5,1,4,3,6,6,2,2,4,4,6,8,8,8,4,4,7,7,7,7,1,1,1,4,1,8,8,8,8,8,8,8,8,2,2,3,1,5,9,9,1,7,7,7,7,7,7,9,8,8,8,8,8,8,3,7,7,7,7,8,6,6,8,8,2,2,2,2,2,2,2,2,6,9,9,9,9,9,9,9,5,5,5,6,6,6,1,1,1,1,1,7,7,7,7,5,5,5,6,6,6,6,9,9,9,9,9,9,9,9,9,9,2,7,2,4,4,4,4,1,1,1,1,2,2,2,2,2,5,7,7,8,1,1,1,1,3,3,3,3,3,3,3,3,3,4,9,9,9,9,9,9,9,4,4,4,5,5,7,7,9,9,9,9,9,6,6,6,6,6,9,5,5,5,5,5,5,5,9,9,9,2,7,7,7,7,7,5,5,5,1,1,5,4,5,5,5,5,7,9,9,9,9,9,2,2,2,2,2,2,2,2,4,4,1,1,1,5,5,4,4,4,8,8,8,8,8,2,2,2,2,2,3,3,3,7,5,5,5,4,4,3,3,3,3,3,2,9,7,7,7,7,7,7,7,7,7,7,7,7,6,6,6,6,5,9,9,3,3,3,3,3,6,6,6,9,9,9,9,9,9,9,4,4,1,1,1,1,3,8,8,8,8,8,8,8,8,8,4,6,6,6,6,8,8,1,9,4,4,4,4,6,6,4,4,1,9,9,9,9,1,1,2,2,3,3,1,1,3,3,3,3,3,3,3,9,8,8,3,3,3,3];
            assert.strictEqual(longestSeries(input), 21, "These results are not correct");
        });
        
    })
    
    describe("Tests with weird values.", function(){
        it("should return 0 when the input is an empty array.", function(){
            const input = [0];
            expect(longestSeries(input)).to.eq(0);
        });
        it("should return the input's length-1 when the results were always the same.",function(){
            const input = [3,1,1,1];
            expect(longestSeries(input)).to.eq(input.length-1);
        });
        it("should return 1 when there is no series at all.", function(){
            const input = [3,1,2,3];
            expect(longestSeries(input)).to.equal(1)
        })
    })

    describe("Tests invalid values and error handling.", function(){
        it("should generate an error for values like undefined and null",function(){
            expect(() => longestSeries(null)).to.throw("Invalid value");
            expect(() => longestSeries(undefined)).to.throw("Invalid value");
        });
    })
})