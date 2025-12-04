<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Happy Birthday Amayi </title>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            background: linear-gradient(#ffc7da, #ff8ab3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            font-family: "Comic Sans MS", cursive;
        }

        .panda {
            width: 230px;
            animation: float 3s infinite ease-in-out;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        h1 {
            color: #c6006f;
            font-size: 30px;
            margin-top: 15px;
            text-shadow: 0 0 10px white;
        }

        button {
            margin-top: 28px;
            padding: 15px 32px;
            background: #ff0066;
            border: none;
            font-size: 20px;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            box-shadow: 0px 0px 15px rgba(255, 0, 85, 0.6);
            transition: 0.3s;
        }

        button:hover {
            background: #ff2b85;
            transform: scale(1.1);
        }
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

    <!-- 3D Romantic Panda GIF -->
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJ4azdwd3RvNDV0NXozaXp4bzQ4dHkwZnJpMncwMTBzdGhyaW80ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IzXiddo2twMmdmU8Lv/giphy.gif" alt="Cute Panda" class="panda">
    <h1> A cutie was born today</h1>
    <h1> 24 years ago!...|</h1>
    <h2>yes its you my Amayi❤️</h2>
    <h3>A little surprise awaits you.....</h3>

    <button onclick="location.href='gallery.html'">
        Click to Begin 🎀
    </button>

</body>
</html>
