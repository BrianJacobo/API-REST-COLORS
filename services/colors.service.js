const {colors} = require('../consts/color')
class ColorsService {

  constructor(){
    this.colors = colors;
  }

  async create( data ){
    const newId= this.colors.length + 1 ;
    const {name, color} = data;
    if(!name || !color){
      throw new Error('bad request');
    }
    const newColor = {
      id: newId,
      ...data

    }
    this.colors.push( newColor )
    return newColor;
  }

  async find() {
    return this.colors;
  }

  async findById( id ) {
    const color = this.colors.find(item => item.id === id);
    if (!color) {
      throw new Error('color not found');
    }
    return color;
  }

  async update( id, changes ) {
    const index = this.colors.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('color not found');
    }
    const color = this.colors[index];
    this.colors[index] = {
      ...color,
      ...changes
    };
    return this.colors[index];
  }

  async delete( id ) {
    const index = this.colors.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('color not found');
    }
    this.colors.splice(index, 1);
    return { id };
  }
}

module.exports= ColorsService;
