document.getElementById('myform').addEventListener('submit', function(e){
    e.preventDefault();
    
    let getUrl = document.getElementById('product_url').value;
    let splitUrl = getUrl.split('=');
    let productId = splitUrl[1].trim();
    let newProductId = productId.match(/[0-9]/g);
    let strProductId = newProductId.toString().replace(/\,/g,"");

    setTimeout(function(){
        let removeProduct = "https://www.savevalue2u.com.my/shop-sync/shopee_product_function.php?remove=1&product_id=g" + strProductId;
        location.replace(removeProduct);
        setTimeout(function(){
            let unsyncProduct = "https://www.savevalue2u.com.my/shop-sync/sync_product.php?action=delete&product_id=g" + strProductId;
            location.replace(unsyncProduct);
        },1);
    },2);

    getUrl.reset();
});

