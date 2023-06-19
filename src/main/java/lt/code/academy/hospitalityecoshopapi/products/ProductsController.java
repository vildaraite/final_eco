package lt.code.academy.hospitalityecoshopapi.products;


import lt.code.academy.hospitalityecoshopapi.products.dto.Product;
import lt.code.academy.hospitalityecoshopapi.products.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

import static lt.code.academy.hospitalityecoshopapi.products.Endpoint.*;


@RestController
@RequestMapping(PRODUCTS)
public class ProductsController {
    private final ProductService productService;
    public ProductsController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getProducts() {
        return productService.getProducts();
    }
    @GetMapping(value = PRODUCT, produces = MediaType.APPLICATION_JSON_VALUE)
    public Product getProduct(@PathVariable(productId) UUID id) {
        return productService.getProduct(id);
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduct(@RequestBody Product product) {
        productService.createProduct(product);
    }
    @PutMapping(value = PRODUCT, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateProduct(@RequestBody Product product, @PathVariable(productId) UUID id) {
        product.setId(id);
        productService.updateProduct(product);
    }
    @DeleteMapping(PRODUCT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable(productId) UUID id) {
        productService.deleteProduct(id);
    }

    @GetMapping(value = SEARCH, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> search(@RequestParam String query) {
        return productService.search(query);
    }
}