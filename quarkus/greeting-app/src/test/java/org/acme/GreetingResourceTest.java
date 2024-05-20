package org.acme;

import io.quarkus.test.junit.QuarkusTest;
import org.acme.greeting.extension.GreetingService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class GreetingResourceTest {

    @Inject
    GreetingService service;

    @Test
    public void testHelloEndpoint() {
        given()
                .when().get("/hello")
                .then()
                .statusCode(200)
                .body(is("Hello RESTEasy"));
    }

    @Test
    public void testInjectFromExtension (){
        int a =2;
        Assertions.assertEquals("hello Quarkus", service.greeting("Quarkus"));
    }

}