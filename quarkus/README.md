В greeting-app само приложение в котором:
1) Эндпоинта /hello - экспоузит само прилоежние
2) Эндпоинта /greeting - экспоузит экстешен greeting-extension
3) Тест org.acme.GreetingResourceTest#testInjectFromExtension в котором инжектится бин из экстеншена

в greeting-extension кварку экстншен в котром
1) Эндпоинта /greeting 
2) Тест в рантайм папке org.acme.greeting.extension.GreetingServiceTest#testGreetingService который инжектится бин из рантайм папки
3) Тест в деплоймент папке org.acme.greeting.extension.GreetingServiceTest#testGreetingService в который инжектится бин из райнатйм папки т.к org.acme.greeting.extension.deployment.GreetingExtensionProcessor#producer
то есть бины из райнтайм папке будут доступны если в деплоймент папке есть BuildStep который экспоузит этот бин
