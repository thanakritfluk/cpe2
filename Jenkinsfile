pipeline {
     agent { label 'master' }
     stages {
          stage('Source') {
               steps {
                    git branch: 'master',
                        url: 'https://github.com/thanakritfluk/cpe2.git'
               }
          }
          stage('Build') {
               steps {
                    sh 'npm install'
               }
          }
          stage('Test') {
               steps {
                    echo 'testing...'
               }
          }
          stage('Deploy') {
               steps {
                    sh 'npm start'
               }
          }
     }
}
