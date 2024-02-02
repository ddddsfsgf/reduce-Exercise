describe("extractValue", function(){
    const arr = [
    {name: 'Elie'}, 
    {name: 'Tim'}, 
    {name: 'Matt'}, 
    {name: 'Colt'}
    ]
    it("Should return a new array with the value of each object at the key!", function(){
        expect(extractValue(arr, "name")).toEqual(["Elie", "Tim", "Matt", "Colt"])
    });
});
describe("vowelCount", function(){
    it("Should accept a string and return an object with the keys as the vowel and the values as the number of times the vowel appears in the string!", function(){
        expect(vowelCount('Elie')).toEqual({e: 2, i: 1});
    })
});
describe("addKeyAndValue", function(){
    const arr = [
    {name: 'Elie'},
    {name: 'Tim'}, 
    {name: 'Matt'},
    {name: 'Colt'}
    ];
    const updated = [
    {title: 'Instructor', name: 'Elie'},
    {title: 'Instructor', name: 'Tim'},
    {title: 'Instructor', name: 'Matt'},
    {title: 'Instructor', name: 'Colt'}
    ]
    it("Should add a key and value to each object!", function(){
        expect(addKeyAndValue(arr, "title", "Instructor")).toEqual(updated)
    });
});
describe("partition", function(){
    function isEven(val){
        return val % 2 === 0;
      }
      
      const arr = [1,2,3,4,5,6,7,8];
      
      partition(arr, isEven)
      
      function isLongerThanThreeCharacters(val){
        return val.length > 3;
      }
      
      const names = ['Elie', 'Colt', 'Tim', 'Matt'];
      it("Should return an array of arrays with the first subarray as values returning true from the callback!", function(){
        expect(partition(arr, isEven)).toEqual([[2, 4, 6, 8], [1, 3, 5, 7]]);
        expect(partition(names, isLongerThanThreeCharacters)).toEqual([
            ["Elie", "Colt", "Matt"],
            ["Tim"]
        ]);
      });
});