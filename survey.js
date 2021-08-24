const { profile } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name? (Nicknames are acceptable) ', (name) => {
  let onlineProfile = {};
  onlineProfile.name = name;

  rl.question(' What is your age', (age) => {
    onlineProfile.age = age;
    rl.question(' What is your favourite type of music', (music) =>  {
      onlineProfile.music = music;
      rl.question(' Do you like staying in or going out?', (placeOfPreference) => {
        onlineProfile.placeOfPreference = placeOfPreference;
        rl.question(' What do you like doing at your place of preference?', (whatTheyDo) => {
          onlineProfile.whatTheyDo = whatTheyDo;
          rl.question(' Are you a early bird or night owl?', (typeOfSleep) => {
            onlineProfile.typeOfSleep = typeOfSleep;
            rl.question(' what is your favourite type of car?' , (car) => {
              onlineProfile.car = car;
              rl.question(' what would you rate this survey out of 10?', (rating) => {
                onlineProfile.rating = rating;
                rl.close();
                console.log(
                  `${onlineProfile.name} is ${onlineProfile.age} years old, loves listening to ${onlineProfile.music}, 
                    prefers ${onlineProfile.placeOfPreference} and likes ${onlineProfile.whatTheyDo}, they're a ${onlineProfile.typeOfSleep}, 
                    they like ${onlineProfile.car}, and rated this survey ${onlineProfile.rating}/10. `
                );
              });
            });
          });
        });
      });
    });
  });
});
