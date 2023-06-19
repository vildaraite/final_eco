package lt.code.academy.hospitalityecoshopapi.products;

public interface Endpoint {
    String productId = "productId";
    String ROOT = "/api";
    String PRODUCTS = ROOT + "/products";
    String PRODUCT = "/{"+ productId +"}";
    String SEARCH = "/search";
}