import moment from 'moment';

export default[{
    /* 
      id:'1',
      descricao:'gum',
      note:'',
      amount:195,
      createAt:0
      
  },{
      id:'2',
      descricao:'rent',
      note:'',
      amount:109500,
      createAt:moment(0).subtract(4,'days').valueOf()
      
  },{
      id:'3',
      descricao:'credit card',
      note:'',
      amount:4500,
      createAt:moment(0).add(4,'days').valueOf()
      */
     id: '1',
    descricao: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    descricao: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    descricao: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }];