package org.acme.greeting.extension;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

@QuarkusTest
public class GreetingServiceTest {

    @Inject
    GreetingService service;

    @Test
    public void testGreetingService() {
        int a =2;
        Assertions.assertEquals("hello Quarkus", service.greeting("Quarkus"));
    }
}