<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
    </script>
</head>

<body>
 
        <div class="container">
           @if(session()->has('status'))
           <div class="alert alert-success">
                {{session('status')}}
                </div>
           @endif
            <div class="row">
                <div class="col-md-4 m-4 ">
                  <form method="POST">
                    @csrf
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">city</label>
    <input type="text" class="form-control" name="city" id="exampleInputPassword1">
  </div>
  <div class="mb-3 ">
  <label for="exampleInputPassword1" class="form-label">marks</label>
    <input type="text" class="form-control" name="marks" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
                <div class="col-md-6">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">S no</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Marks</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    @foreach($students as $stu)
    <tr>
      <th scope="row">{{$stu->id}}</th>
      <td>{{$stu->name}}</td>
      <td>{{$stu->city}}</td>
      <td>{{$stu->marks}}</td>
      <td>
        <a href="{{url('/edit',$stu->id)}}" class="btn btn-warning">edit</a>
        <a href="{{url('/delete',$stu->id)}}" class="btn btn-danger">delete</a>
      </td>
    </tr>
    @endforeach
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
        integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous">
    </script>
</body>

</html>