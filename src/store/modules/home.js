import axios from 'axios';
import V1API from '../../../api-path/api-path';
import image from '../../assets/images/Home/1.jpg';

const state = {
  tops: [
    {
      id: 1,
      img: image,
      title: 'The Complete Business Course',
      text: 'The Complete Business Course. The Complete Business Course',
    },
    {
      id: 2,
      img: image,
      title: 'The Complete Mobile Course',
      text: 'The Complete Business Course. The Complete Business Course',
    },
    {
      id: 3,
      img: image,
      title: 'The Complete Burger Course',
      text: 'The Complete Business Course. The Complete Business Course',
    },
  ],

  // hot_categories: [
  //   {
  //     id: 1,
  //     img: category_img,
  //     title: 'Business',
  //     classes: '33',
  //     color: 'bg-yellow-200',
  //     text_color: 'text-yellow-600'
  //   },
  //   {
  //     id: 2,
  //     img: category_img,
  //     title: 'Development',
  //     classes: '23',
  //     color: 'bg-blue-100',
  //     text_color: 'text-blue-600'
  //   },
  //   {
  //     id: 3,
  //     img: category_img,
  //     title: 'Accounting',
  //     classes: '10',
  //     color: 'bg-fuchsia-200',
  //     text_color: 'text-fuchsia-600'
  //   },
  //   {
  //     id: 4,
  //     img: category_img,
  //     title: 'IT & Software',
  //     classes: '20',
  //     color: 'bg-lime-200',
  //     text_color: 'text-lime-600'
  //   },
  //   {
  //     id: 5,
  //     img: category_img,
  //     title: 'Marketing',
  //     classes: '17',
  //     color: 'bg-purple-200',
  //     text_color: 'text-purple-600'
  //   },
  //   {
  //     id: 6,
  //     img: category_img,
  //     title: 'Art & Design',
  //     classes: '23',
  //     color: 'bg-cyan-200',
  //     text_color: 'text-cyan-600'
  //   },
  //   {
  //     id: 7,
  //     img: category_img,
  //     title: 'Photography',
  //     classes: '06',
  //     color: 'bg-rose-200',
  //     text_color: 'text-rose-600'
  //   },
  //   {
  //     id: 8,
  //     img: category_img,
  //     title: 'Health & Fitness',
  //     classes: '12',
  //     color: 'bg-green-200',
  //     text_color: 'text-green-600'
  //   },
  //   {
  //     id: 9,
  //     img: category_img,
  //     title: 'Lifestyle',
  //     classes: '72',
  //     color: 'bg-amber-200',
  //     text_color: 'text-orange-600'
  //   },
  // ],

  hot_categories: [],

  got_categories: [
    {
      id: 1,
      img: image,
      title: 'Software Development',
      videos: '23',
      lessos: '10'
    },
    {
      id: 2,
      img: image,
      title: 'Heaalth Business',
      videos: '23',
      lessos: '10'
    },
    {
      id: 3,
      img: image,
      title: 'Accounting',
      videos: '23',
      lessos: '10'
    },
    {
      id: 4,
      img: image,
      title: 'IT & Software',
      videos: '23',
      lessos: '10'
    },
    {
      id: 5,
      img: image,
      title: 'Art & Design',
      videos: '23',
      lessos: '10'
    },
  ],
}

const getters = {
}

const mutations = {
  SET_CATEGORIES(state, items) { 
    state.hot_categories = items
  }
}

const actions = {
  getCategories ({ commit }, payload) {
    axios.get(V1API.get_category).then(result => {
      let results = result.data.data
        console.log(result.data.data)
          commit('SET_CATEGORIES', results)
        })
        .catch(error => {
          console.log(error)
        })       
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}