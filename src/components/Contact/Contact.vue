<template>
    <div class="w-full flex flex-col items-center">
        <div class="container">
            <div class="text-center p-8 md:px-12 lg:py-12">
                <p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-4">Get In Touch</p>
                <div class="flex justify-center text-primary">
                    <router-link to="/"><p class="text-sm lg:text-base">Home</p></router-link>
                    <p class="px-2 text-sm lg:text-base"> / </p>
                    <p class="text-sm lg:text-base">Contact</p>
                </div>
            </div>

            <div class="bg-gray-100 my-16">
                <div class="w-full flex flex-col lg:flex-row p-6 sm:p-8 md:p-16 lg:p-12 xl:p-20">
                    <div class="w-full lg:w-2/3 rounded-md px-4 sm:px-8 lg:px-4 py-4 bg-white">
                        <div class="">
                            <p class="font-semibold border-b border-gray-200 py-2">Fillup The Form</p>
                        </div>

                        <div class="sm:flex py-2">
                            <div class="w-full sm:pr-2">
                                <p class="text-sm py-2 text-gray-600">Name</p>
                                <InputText class="h-12 w-full" type="text" v-model="value" />
                            </div>
                            <div class="w-full sm:pl-2">
                                <p class="text-sm py-2 text-gray-600">Email</p>
                                <InputText class="h-12 w-full" type="text" v-model="value" />
                            </div>
                        </div>
                        
                        <div class="w-full py-2">
                            <p class="text-sm py-2 text-gray-600">Subject</p>
                            <InputText class="h-12 w-full" type="text" v-model="value" />
                        </div>

                        <div class="w-full py-2">
                            <p class="text-sm py-2 text-gray-600">Message</p>
                            <Textarea class="h-24 w-full" v-model="value1" rows="5" cols="30" />
                        </div>

                        <div class="flex justify-center pt-4">
                            <button class="bg-primary text-white rounded-md text-sm xl:text-base px-4 py-3 xl:px-8 xl:py-4 mb-4">Submit Request</button>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 rounded-md px-4 sm:px-8 lg:px-4 py-4 ml-0 lg:ml-8 mt-8 lg:mt-0 bg-white">
                        <p class="font-semibold border-b border-gray-200 py-2">Reach Us</p>

                        <div class="mt-3 sm:mt-0 sm:p-3">
                            <p class="font-semibold text-xl md:text-2xl xl:text-3xl">Get In Touch</p>
                            <p class="text-sm py-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            
                            <div class="flex items-center py-2 sm:px-4 sm:py-4">
                                <div class="mr-3">
                                    <i class="pi pi-home text-primary" style="font-size: 38px;"></i>
                                </div>
                                <div class="sm:px-2 text-sm">
                                    <p class="font-semibold py-2">Reach Us</p>
                                    <p class="text-gray-600">2512, New Market, Eliza Road, Sincher 80 CA, Canada, USA</p>
                                </div>
                            </div>

                            <div class="flex py-2 sm:px-4 sm:py-4 items-center">
                                <div class="mr-3">
                                    <i class="pi pi-envelope text-secondary" style="font-size: 38px"></i>
                                </div>
                                <div class="sm:px-2 text-sm">
                                    <p class="font-semibold py-2">Drop A Mail</p>
                                    <p class="text-gray-600">catchplatform@gmail.com</p>
                                    <p class="text-gray-600">contact@catchplatform.com</p>
                                </div>
                            </div>

                            <div class="flex py-2 sm:px-4 sm:py-4 items-center">
                                <div class="mr-3">
                                    <i class="pi pi-mobile text-alternate1" style="font-size: 38px;"></i>
                                </div>
                                <div class="sm:px-2 text-sm">
                                    <p class="font-semibold py-2">Call Us</p>
                                    <p class="text-gray-600">+91 235 548 7548</p>
                                    <p class="text-gray-600">+91 235 548 7548</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Primeicons from 'primeicons/primeicons.css';

export default {
    components: {
        InputText,
        Textarea,
        Primeicons,

    },
}
</script>