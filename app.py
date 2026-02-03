from flask import Flask,render_template,request,url_for,redirect,flash,session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
posts=[ {'Name':'Abhra','Sex':'M'},{'Name':'Sharmistha','Sex':'F'}]



app = Flask(__name__)
app.secret_key='f4cda0bf-5e82-47d3-8ce3-6444eaa74ce9'

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db'

db=SQLAlchemy()
db.init_app(app)

class User(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    mobile=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(20),unique=True,nullable=False)
    email=db.Column(db.String(120),unique=True,nullable=True)
    #image_file=db.Column(db.String(20),nullable=False,default='default.jpg')
    password=db.Column(db.String(60),nullable=False)
    posts=db.relationship('Post',backref='author',lazy=True)
    def __repr__(self):
        # repr=representation
        return "User('{}', '{}','{}')".format(self.username,self.mobile,self.email)
    '''class Post(db.Model):
        id=db.Column(db.Integer,primary_key=True)
        title=db.Column(db.String(100),nullable=False)
        date_posted=db.Column(db.DateTime,nullable=False,default=datetime.now)
        content=db.Column(db.Text,nullable=False)
        user_id=db.Column(db.Integer,db.ForeignKey('user.id'),nullable=False)
    
    def __repr__(self):
        return "Post('{}',{})".format(self.title,self.date_posted)
    '''
#creating table 
with app.app_context():
    db.drop_all()
    db.create_all()



'''formData={'abhrasky@gmail.com':{'name':'Abhra','password':'123','mobile':9732990757},
          'sharmishthasaha2013@gmail.com':{'name':'Sharmistha','password':'111','mobile':9732990757}}'''
stored_name=''
stored_pass=''

info={}

@app.route("/")
@app.route('/home' )
def home():
    return render_template('index.html')



@app.route('/register',methods=["POST","GET"])
def register():
    if request.method=='POST':
        print('in post')
        print('data', request.form['name'])
        
        user=User(id=request.form['mobile'] ,username=request.form['name'],mobile=request.form['mobile'],email=request.form['email'],
                  password=request.form['password'])
        db.session.add(user)
        db.session.commit()
        
        info['name']=request.form['name']
        info['email']=request.form['email']
        info['password']=request.form['password']
        info['mobile']=request.form['mobile']

        formData[info['email']]=info
        flash('Successfully registered !')
        return redirect(url_for('login'))
    else:
        return render_template('register.html')



@app.route("/login",methods=['GET','POST'])
def login():
    global stored_name
    global stored_pass
    global stored_mobile
    global email
    global formData

    if request.method=='POST':
        print('in post')
        email=request.form['email']
        password=request.form['password']
        print('entered email ', request.form['email'])
        print('entered pass',password)
        
        
        if(email in formData.keys()):
            
            
            stored_pass=formData[email]['password']
            
            print('stored pass for ',email,'is ',stored_pass)
            if password==stored_pass:
                flash('Login sucessfull')
                session['name']=formData[email]['name']
                session['email']=email
                session['password']=password
                session['mobile']=formData[email]['mobile']
                print('redirecting to profile page')
                return redirect(url_for('profile'))
            else:
                flash('Wrong! password')
                return render_template('login.html')
        else:
            flash('User not in data base please register')
            return render_template('login.html')
    else:
        return render_template('login.html')


@app.route("/profile")
def profile():
    if "name" in session:
        return render_template('profile.html')
    else:
        return redirect(url_for('login'))  
@app.route("/logout")
def logout():
    session.pop('name',None)
    return redirect(url_for('login'))
@app.route("/blog")
def blog():
    return render_template('blog.html')

@app.route("/DIY_electroinics")
def DIY_electroinics():
    return render_template('DIY_Electronics.html')

@app.route("/Power converters")
def Power_converters():
    return render_template('Power converters.html')

@app.route("/Motor controllers")
def Motor_controllers():
    return render_template('Motor controllers.html')

@app.route("/Smart automotive")
def Smart_automotive():
    return render_template('Smart automotive.html')





if __name__=='__main__':
    app.run(debug=True)


