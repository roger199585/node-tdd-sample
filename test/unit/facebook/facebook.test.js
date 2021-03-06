import FacebookHelper from '../../../src/facebook/helper.js';
import task1_initModel from '../../../src/database/task1';

describe.only('facebook-helper', () => {
  let facebookHelper = null;
  let models = null;
  let friends = null;

  before(async(done) => {
    let userId = "813383575365529";
    let token = "EAACEdEose0cBAINrWYMl6ZC8ld2YyFZAQPYaEe6qNNshCYK87pZAFqXQNNB6GAaMFhGZCQgaR2fX9JpwJj5GYkiMG6EZClt0DCQ9jTf9T3xZA7DcfPBTrckJ5v265qq5ClbbZBEm4QWdAPZArvkiqZBsDhd8fI2INadshdYY0UWR7kAZDZD"
    models = await task1_initModel();
    facebookHelper = new FacebookHelper({userId, token});
    console.log(facebookHelper);
+
    done();
  });

  it("get friends list", async (done) => {
    try {
      let friends = await facebookHelper.getFriends();
      console.log("friends", friends);
      (friends != null).should.be.true;
      friends.should.be.Array;
      friends[0].should.have.keys("name","id");
      let f_add = await models.User.bulkCreate(friends);
      done();
    } catch (e) {
      done(e);
    }
  });
  it("find friends and update email", async (done) => {
    try {
      let find = await models.User.findOne({
          where:{id:'901833236500661'}
        });
    console.log(find);

      (find != null).should.be.true;
      let updatemail = await models.User.update(
      {
        email: 'hellojs@trunk.studio'
      },
      {
        where:{
          id:'901833236500661'
        }
      }
    );
    let find2 = await models.User.findOne({
        where:{id:'901833236500661'}
      });
      find2.email.should.be.eq('hellojs@trunk.studio');
      done();
    } catch (e) {
      done(e);
         }
      });
      it('delete friend', async (done) => {
     try{
       //利用email去查詢DB，並刪除紀錄
       let deleteemail = await models.User.destroy({
         where:{email:'hellojs@trunk.studio'}
       });

       let result = await models.User.findOne({
         where:{email:'hellojs@turnk.studio'}
       });

       (result === null ).should.be.true;

       done();
     }
     catch(e){
       done(e);
     }
   });
});