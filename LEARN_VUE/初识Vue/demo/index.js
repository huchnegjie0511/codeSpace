Vue.createApp({
    template: "#my-app",
    data() {
      return {
        isShow: true,
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ]
      }
    },
    computed: {
      totalPrice() {
        return this.books.reduce((total, book) => total + (book.price * book.count), 0);
      },
      
    },
    methods: {
      add(index){
        this.books[index].count++;
      },
      minus(index){
        if(this.books[index].count > 0)
        this.books[index].count--;
        else return 0;
      },
      remove(index) {
        this.books.splice(index, 1);
        // 更新剩余书籍的序号
        this.books.forEach((book, idx) => {
          book.id = idx + 1;
        });
      }
    }
  }).mount("#app");