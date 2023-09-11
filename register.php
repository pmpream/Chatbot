<?php
session_start();
require_once 'connection.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registion</title>
  <link rel="stylesheet" href="style.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">


</head>

<body>
  <div class="box">
    <div class="container">

      <div class="top">
        <span>Have an account?</span>
        <header>Register</header>
      </div>

      <div class="contaner">
       
      
        <form action="signup_db.php" method="post">
          <?php if (isset($_SESSION['error'])) { ?>
            <div class="alert alert-danger" role="alert">
              <?php
              echo $_SESSION['error'];
              unset($_SESSION['error']);
              ?>
            <?php } ?>
            <?php if (isset($_SESSION['success'])) { ?>
              <div class="alert alert-success" role="alert">
                <?php
                echo $_SESSION["success"];
                unset($_SESSION['success']);
                ?>
              <?php } ?>
              <?php if (isset($_SESSION['warning'])) { ?>
                <div class="alert alert-waring" role="alert">
                  <?php
                  echo $_SESSION["warning"];
                  unset($_SESSION['warning']);
                  ?>
                <?php } ?>

                <!--<div class="input-field">
                  <label for="firstname"></label>
                  <input type="text" class="input" name="firstname" placeholder="Firstname" aria-describedby="emailHelp">
                  <i class='bx bx-user'></i>

                </div>
                <div class="input-field">
                  <label for="lastname"></label>
                  <input type="text" class="input" name="lastname" placeholder="Lastname" aria-describedby="emailHelp">
                  <i class='bx bx-user'></i>

                </div>
                <div class="input-field">
                  <label for="email"></label>
                  <input type="email" class="input" name="email" placeholder="email" aria-describedby="emailHelp">
                  <i class='bx bx-lock-alt'></i>

                </div>
                <div class="input-field">
                  <label for="password"></label>
                  <input type="password" class="input" name="password" placeholder="password">
                  <i class='bx bx-lock-alt'></i>
                </div>

                <div class="input-field">
                  <label for="confirm password"></label>
                  <input type="password" class="input" name="c_password" placeholder="confirm Password">
                  <i class='bx bx-lock-alt'></i>
                </div>


                <div class="input-field">
                  <input type="submit" name="signup" class="submit" id="">
                </div>
              -->



 <div class="container">

<div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="users">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="lastname">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="email">
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="password">
                            </div>
                            <div class="col-sm-6">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Repeat Password">
                            </div>
                        </div>
                        <a href="register.php" class="btn btn-primary btn-user btn-block">
                            Register Account
                        </a>
                        <hr>
                        <a href="index.php" class="btn btn-primary btn-user btn-block">
                            Login
                        </a>
                        
                    
                           
                    </form>
                    <hr>
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>







                

        </form>

        <div class="two-col">
          <div class="one">
            <label><a href="index.php">คลิกที่นี่เพื่อเข้าสู่ระบบ</a></label>
          </div>
        </div>

</body>
<php ?>

</php>

</html>