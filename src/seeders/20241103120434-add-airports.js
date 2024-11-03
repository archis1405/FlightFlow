'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('Airports',[
        {
          name : 'Kempegowda Interntional Airport',
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Mysuru Airport',
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Chhatrapati Shivaji Maharaj International Airport (CSMIA)',
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Chhatrapati Shivaji Maharaj Domestic Airport',
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Indira Gandhi International Airport (IGI)',
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Netaji Subhas Chandra Bose International Airport (CCU)',
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Chennai International Airport (MAA)',
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Chandigarh International Airport (IXC)',
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Pune International Airport (PNQ) ',
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Sardar Vallabhbhai Patel International Airport (AMD)',
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Rajiv Gandhi International Airport (HYD)',
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'John F. Kennedy International Airport (JFK)',
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Newark Liberty International Airport (EWR) ',
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Heathrow Airport (LHR)',
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Gatwick Airport (LGW)',
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Los Angeles International Airport (LAX) ',
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Ontario International Airport (ONT) ',
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Long Beach Airport (LGB)',
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Charles de Gaulle Airport (CDG) ',
          cityId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Narita International Airport (NRT)',
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Haneda Airport (HND) ',
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name : 'Sydney Kingsford Smith Airport (SYD)',
          cityId: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Toronto Pearson International Airport (YYZ)',
          cityId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Billy Bishop Toronto City Airport (YTZ) ',
          cityId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Singapore Changi Airport (SIN)',
          cityId: 24,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Dubai International Airport (DXB)',
          cityId: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Al Maktoum International Airport (DWC)',
          cityId: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Rotterdam The Hague Airport (RTM)',
          cityId: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Eindhoven Airport (EIN)',
          cityId: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Abu Dhabi International Airport (AUH) ',
          cityId: 38,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name : 'Hartsfield-Jackson Atlanta International Airport (ATL)',
          cityId: 41,
          createdAt: new Date(),
          updatedAt: new Date()
        }

        
      ],{});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
