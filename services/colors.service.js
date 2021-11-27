class ColorsService {

  constructor(){
    this.colors = [
      {
        "id":1,
        "name":"cerulean",
        "color":"#98B2D1"
      },
      {
        "id":2,
        "name":"fuchsia rose",
        "color":"#C74375"
      },
      {
        "id":3,
        "name":"true red",
        "color":"#BF1932"
      }
    ];
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
      throw new Error('color not found')
    }
    this.colors.splice(index, 1);
    return {
      message : 'deleted successfully',
      id: id
    }
  }
}

module.exports= ColorsService;
