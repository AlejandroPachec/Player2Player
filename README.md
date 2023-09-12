# 

## USUARIOS:
1. POST - user/create
2. POST - user/login
3. GET - user/profile (Conseguir media valoraciones)
4. PUT - user/edit-profile (TOKEN)
5. DELETE - user/delete-account (TOKEN)
6. PUT - user/activate
7. POST - user/password-recovey

## PRODUCTOS: 
1. POST - product/post
2. PUT - product/edit/:idProduct (TOKEN)
3. DELETE - product/delete/:idProduct (TOKEN)
4. GET - product/:idProduct
5. GET - products (Añadir filtro por nombre, categoria, localidad y precio)
6. GET - product/category/:idCategory

## REVIEWS:
1. POST - user/review/:idUser (TOKEN)
2. DELETE - user/review/:idReview (TOKEN)
3. PUT - user/edit/:idReview (TOKEN)
4. GET - user/:idUser/reviews

## ORDERS:
1. GET - user/order/:idOrder (TOKEN)
2. GET - user/orders (TOKEN)
3. POST - user/orders