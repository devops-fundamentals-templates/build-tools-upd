package academy.softserve.dogs

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.core.io.ClassPathResource
import org.springframework.web.reactive.config.CorsRegistry
import org.springframework.web.reactive.config.WebFluxConfigurer
import org.springframework.web.reactive.function.server.RequestPredicates
import org.springframework.web.reactive.function.server.RouterFunction
import org.springframework.web.reactive.function.server.RouterFunctions
import org.springframework.web.reactive.function.server.ServerResponse

@SpringBootApplication
class DogsApplication {
    @Bean
    fun imagesRouter(): RouterFunction<ServerResponse> =
        RouterFunctions.resources("/images/**", ClassPathResource("images/"))

    @Bean
    fun staticResourcesRouter(): RouterFunction<ServerResponse> =
        RouterFunctions.resources("/**", ClassPathResource("static/"))

    @Bean
    fun indexRouter(): RouterFunction<ServerResponse> =
        RouterFunctions.route(RequestPredicates.GET("/")) {
            ServerResponse.ok().bodyValue(ClassPathResource("static/index.html"))
        }

    @Bean
    fun corsConfigurer(): WebFluxConfigurer = object : WebFluxConfigurer {
        override fun addCorsMappings(registry: CorsRegistry) {
            registry
                .addMapping("/**")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedOrigins("*")
        }
    }
}

fun main(args: Array<String>) {
    runApplication<DogsApplication>(*args)
}
