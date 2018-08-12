import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new SortPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('throws an error when the option parameter is not passed', () => {
    const error = "option should be 'dept' or 'emp'";
    //expect(pipe.transform()).toThrow();
    expect(pipe.transform).toThrow();
    expect(pipe.transform).toThrowError(error);
  });

  describe("sorting option='dept'", () => {
    let data;
    beforeEach(()=> {
      data = [
        {id: 2, name: 'Third'},
        {id: 1, name: 'Second'},
        {id: 3, name: 'First'}
      ];
    });

    it('default sorting sort by name', () => {
      const result = pipe.transform(data, 'dept');
      expect(result[0].name).toBe('First');
      expect(result[1].name).toBe('Second');
      expect(result[2].name).toBe('Third');
    });

    it('sort by id', () => {
      const result = pipe.transform(data, 'dept', 'id');
      expect(result[0].name).toBe('Second');
      expect(result[1].name).toBe('Third');
      expect(result[2].name).toBe('First');
    });
  });

  describe("sorting option='emp'", () => {
    let data;
    beforeEach(()=> {
      data = [
        {lastName: 'Doe', firstName: 'John'},
        {lastName: 'Carter', firstName: 'Abby'},
        {lastName: 'Abe', firstName: 'Sam'}
      ];
    });

    it('default sorting by firstName', () => {
      const result = pipe.transform(data, 'emp');
      expect(result[0].firstName).toBe('Abby');
      expect(result[1].firstName).toBe('John');
      expect(result[2].firstName).toBe('Sam');
    });

    it('sort by lastName', () => {
      const result = pipe.transform(data, 'emp', 'lastName');
      expect(result[0].lastName).toBe('Abe');
      expect(result[1].lastName).toBe('Carter');
      expect(result[2].lastName).toBe('Doe');
    });
  });  
});
