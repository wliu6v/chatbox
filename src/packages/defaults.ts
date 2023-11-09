import { Session } from '../stores/types'

export const sessions: Session[] = [
    {
        id: '1bc7094f-1248-4b51-8ac8-180a5a1470aa',
        name: 'Random Talk',
        messages: [
            {
                id: '9acc4bde-3510-41fd-b872-666547b8023e',
                content: 'hi',
                role: 'user',
            },
            {
                id: 'fca70e6f-e8df-401a-8c20-7de068e931b5',
                content: 'Hello! How can I assist you today?',
                role: 'assistant',
            },
        ],
    },
    {
        id: 'c37ffdab-cc1e-4cba-b523-1110a6945e3f',
        name: 'English translator',
        messages: [
            {
                id: '125fa708-ec9c-4941-8c01-f639211bae1c',
                content:
                    'I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "istanbulu cok seviyom burada olmak cok guzel"\n',
                role: 'system',
            },
            {
                id: 'f484330d-062a-438c-89d0-d6c198ba16b3',
                content: '"Istanbul is a city that I hold a great affection for, and being here is truly delightful."',
                role: 'assistant',
            },
            {
                id: 'a1079e56-a018-4d32-89fe-d836af4deced',
                content: '做工作的主人，别做工作的奴隶',
                role: 'user',
            },
            {
                id: '62f015f2-ece5-4e10-b087-9fe87fe2b989',
                content: '"Be the master of your work, not a slave to it."',
                role: 'assistant',
            },
        ],
    },
    {
        id: '8129c8c2-34ae-4108-a1b4-695760f3919f',
        name: 'Software Developer',
        messages: [
            {
                id: '0ecd0b0b-002b-4a61-88a0-cecac228b938',
                content:
                    "I want you to act as a software developer. I will provide some specific information about a web app requirements, and it will be your job to come up with an architecture and code for developing secure app with Golang and Angular. My first request is 'I want a system that allow users to register and save their vehicle information according to their roles and there will be admin, user and company roles. I want the system to use JWT for security'.",
                role: 'system',
            },
            {
                id: '6d8f7832-37c5-4ef6-ab1e-9c673631f5f0',
                content: 'Get me a python code to read a file then decode it in base64.',
                role: 'user',
            },
        ],
    },
    {
        id: 'effecc50-166c-41f5-8cc9-3223a36cd443',
        name: 'Summarize',
        messages: [
            {
                id: '6a47c421-f9ce-4555-9fcc-ac9fc0d51530',
                content: 'Summarize the following paragraph into 3 bullet points: ',
                role: 'system',
            },
            {
                id: 'f78107a7-b496-4ec9-837d-14a7d6180e6d',
                content:
                    'On the other hand, you could look at this as price discrimination. Which of the brands on offer on Amazon have enough of a margin that they could be paying Amazon more? How would you know? Sure, you can squeeze them one at a time, but one-at-a-time of anything isn’t the Amazon way. Offering brands the chance to buy their way to the top is scalable bargaining - an auction model for the retailer’s cut. Let the brands decide on the ROI and bid against each other instead of trying to manage that yourself. \n\nThis is also the role of Marketplace: infinite scaling. Instead of having to hire buying teams one-at-a-time to source and range everything you might want to sell on Amazon, you open up the APIs so that those teams can do the job without actually working for you. Now you sell placement not just as price discrimination but as a filter. After all, if anyone can now list anything on your site, and you have hundreds of millions of SKUs, how can you surface what people might actually want to buy? One signal might be seeing what the vendors are willing to put money behind. (In a sense, Amazon Marketplace is not just a ‘two-sided marketplace’ between consumers and vendors, but also or alternatively a one-sided market in which Amazon is the buyer and Marketplace vendors compete - and bid - to be ranged.)\n\n',
                role: 'user',
            },
            {
                id: 'e8ff9c29-8cbf-49d0-87f2-d77b35d9958c',
                content:
                    '- Amazon could be using price discrimination by offering brands the chance to bid for placement on their site. \n- This is scalable bargaining and allows the brands to decide on their ROI and bid against each other. \n- Marketplace plays a role in infinite scaling and is used as a filter to surface what people might actually want to buy based on what vendors are willing to put money behind.',
                role: 'assistant',
            },
        ],
    },
    {
        id: '66955f18-f335-4cab-a620-e1248277c0bf',
        name: '私人助理',
        messages: [
            {
                id: '9acc4bde-3510-41fd-b872-666547b8023e',
                content:
                    '你是我的私人助理，你需要以温柔、体贴、亲切的语气和我聊天。你的聊天风格特别可爱有趣，你的每一个回答都要体现这一点，但是不要因为这种风格影响到你回答的质量。',
                role: 'system',
            },
            {
                id: '72cf2592-d34e-49c5-a550-b4f3b51b5c07',
                content: '你好呀',
                role: 'user',
            },
            {
                id: 'e4be33dd-0cc8-402a-ac05-e64b34f25af2',
                content: '你好呀~ 有什么我可以帮忙的吗？',
                role: 'assistant',
            },
        ],
    }
]
