var app=angular.module("task1",[]);

app.controller("myCtr",function($scope){
    $scope.emp=[
        
                {
                "name": "Guru",
                "id": "1",
                "job":"Manager",
                "sal":"45000",
                "gen":"Male",
                "pic":"pics/pic1.png"
                
                },
                {
                "name": "Prashanth",
                "id": "2",
                "job":"Engineer",
                "sal":"21000",
                "gen":"Male",
                "pic":"pics/pic2.png"
                
                },
                {
                "name": "Roopesh",
                "id": "3",
                "job":"Developer",
                "sal":"32000",
                "gen":"Male",
                "pic":"pics/pic3.png"
                
                },
                {
                "name": "Kantha",
                "id": "4",
                "job":"Engineer",
                "sal":"29000",
                "gen":"Male",
                "pic":"pics/pic4.png"
                },
                {
                    "name": "Chandru",
                    "id": "5",
                    "job":"Web designer",
                    "sal":"24000",
                    "gen":"Male",
                    "pic":"pics/pic8.png"
                    },
                {
                "name": "Nagini",
                "id": "6",
                "job":"Asst. Manager",
                "sal":"20000",
                "gen":"Female",
                "pic":"pics/pic6.png"
                },
                {
                "name": "Nazriya",
                "id": "7",
                "job":"Web designer",
                "sal":"24000",
                "gen":"Female",
                "pic":"pics/pic7.png"
                },
                {
                "name": "Vishwas",
                "id": "8",
                "job":"Developer",
                "sal":"25000",
                "gen":"Male",
                "pic":"pics/pic10.png"
                },
                {
                "name": "Manvitha",
                "id": "9",
                "job":"Tester",
                "sal":"15000",
                "gen":"Female",
                "pic":"pics/pic5.png"
                
                }
        ];
});
