interface IOnboard {
    id: number,
    title: string,
    description: string,
    image: string
}

export const Onboard: IOnboard[] = [
    {
        id: 1,
        title: 'Grow your creative skill with us',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: require('../assets/images/onboard/1.png')
    },
    {
        id: 2,
        title: 'Explore your new skill today',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: require('../assets/images/onboard/2.png')
    },
    {
        id: 3,
        title: 'Discover the best online courses',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: require('../assets/images/onboard/3.png')
    }
]