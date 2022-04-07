const ft = require ('./html');
const db = require ('./db_utils');


/*describe('test prioTache',() =>{
        expect (db.prioTache(1)).toBe(importante);
        expect (db.prioTache(2)).toBe(moyenne);
        expect (db.prioTache(3)).toBe(faible);
    })*/


describe('Priortie des taches test', () => {
    it('should return priorite importante', () => (
        expect(db.prioTache.priorite(1)).toBe(importante)
    ))

 
    it('should return priorite moyenne', () => (
        expect(db.prioTache.priorite(2)).toBe(moyenne)
    ))

 
    it('should return priorite faible', () => (
        expect(db.prioTache.priorite(3)).toBe(faible)
    ))
 
})
