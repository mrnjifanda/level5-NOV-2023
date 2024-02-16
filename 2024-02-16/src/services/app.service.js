class AppService {

    getUsers() {
        return [
            {
                name: 'Seven',
                email: 'seven@gmail.com'
            },
            {
                name: 'Academy',
                email: 'academy@gmail.com'
            },
            {
                name: 'Coding',
                email: 'coding@gmail.com'
            }
        ];
    }
}

module.exports = new AppService();