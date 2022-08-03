# Tech-Blog-MVC

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This application is mimicking a back end for an e-commerce site configuring a working Express.js API to use Sequelize and interact with a MySQL database. When the manager of the e-commerce company invokes the appliation, then the database that's seeded wuth test data will start and the sequalize models are synced to the MySQL database. The API GET, POST, PUT, and DELETE routes for categories, products, and tags are displayed in a formatted JSON. The manager is able to successfully create, update, and delete data in aby database. 


## Github URL and link to the video

- GitHub URL : https://github.com/priyarizal object-relational-mapping-backend

```
Please copy the link and paste it into your browser to see the functionality. YOU MAY NEED TO DOWNLOAD THE FILE. 
```
https://drive.google.com/file/d/1VxafwcTWmcO_p-UQeRa4XEl7rBeCmnhZ/view


## Code Snippets
 - Sequelize

 ```
 // Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // unique: false
  // as: 'products'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: "CASCADE"
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {

  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id',
})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,

    unique: false
  },
  foreignKey: 'tag_id'
});

 ```
 - get route by an id
 ```
 // get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }; res.status(200).json(productData)
  } catch (err) {
    res.status(500).json(err);
  }
});
```

## Technologies Used
- JavaScript
- Node.js
- NPM
- Express.js
- MySQL2
- Sequelize
- dotenv


## Screenshots
![gif of demo](./Develop/images/1.png)

## License
MIT

## Questions
If you have any questions about the project, please feel free to reach me at priya.rizal2@gmail.com