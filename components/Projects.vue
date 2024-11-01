<template>
    <div>
        <div class="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16  mx-auto">
            <div class="mx-auto max-w-7xl">
                <h2 class="text-3xl font-bold sm:text-4xl text-center mt-5 mb-1">Last Completed Project's 👍</h2>
                <p class="mt-4 text-gray-600 mb-5">
                    Check out my latest completed project and see what I've been building! From last year, this project
                    showcases my skills and passion for creating exceptional web experiences.

                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-3">
                <div>
                    <Mockup :url="'https://gozadera.id'">
                        <img src="/assets/images/projects/project1.png" class="object-fit" alt="Ewshopz.com" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://ewshopz.com'">
                        <img src="/assets/images/projects/project_1.png" class="object-fit" alt="Ewshopz.com" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://evlogiaauthorized.com'">
                        <img src="/assets/images/projects/project_2.png" class="object-fit"
                            alt="evlogiaauthorized.com" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://iahomefurniture.com'">
                        <img src="/assets/images/projects/project_3.png" class="object-fit" alt="iahomefurniture.com" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://gtmotominds.com'">
                        <img src="/assets/images/projects/project3.png" class="object-fit" alt="gtmotominds.com" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://tokoshani.com'">
                        <img src="/assets/images/projects/project__1.png" class="object-fit" alt="tokoshani.com" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://arsliving.id'">
                        <img src="/assets/images/projects/project__2.png" class="object-fit" alt="arsliving.id" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://xtckabcirebon.org'">
                        <img src="/assets/images/projects/project4.png" class="object-fit" alt="xtckabcirebon.org" />
                    </Mockup>
                </div>
                <div>
                    <Mockup :url="'https://alatrebana.com'">
                        <img src="/assets/images/projects/project2.png" class="object-fit" alt="Ewshopz.com" />
                    </Mockup>
                </div>
            </div>

            <div class="mx-auto max-w-7xl">
                <h4 class="text-md font-bold md:text-xl text-center mt-5 mb-2">
                    Check out other projects on my github ! <a href="https://github.com/jstalinko" class="text-blue-500 font-bold italic hover:text-blue-600" target="_blank">@jstalinko</a> & <a href="https://github.com/justalinko" class="text-blue-500 font-bold italic hover:text-blue-600">@justalinko</a>
                </h4>
            </div>
        </div>
    </div>
</template>