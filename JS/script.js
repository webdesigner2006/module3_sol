* {
	box-sizing: border-box;
}
h1 {
	font-family: Brushstroke, fantasy;
	color: #000000;
	text-align: center;
}

body {
@@ -34,7 +33,7 @@ section {
	border:	1px solid black;
	background-color: #00FF99;
	width: 100%;
	height: 200px;
	height: auto;
	font-family: Helvetica;
	color: black;
	position: relative;
@@ -102,6 +101,7 @@ section {
.navbar-brand {
  font-size: 2em;
  border: 0 0 10px 10px;
  color: #FFFFFF;
}

#header-nav {
@@ -115,3 +115,5 @@ section {
  clear: both;
  margin-top: -30px;
}


 37  module-3-solution/index.html 
@@ -18,7 +18,7 @@
            Food, LLC
          </div>

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="true">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
@@ -27,26 +27,25 @@
        </div>

        <div id="collapsable-nav" class="collapse navbar-collapse">
           <ul id="nav-list" class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <hr class="visible-xs">Chicken</a>
           <ul id="nav-list" class="nav navbar-nav navbar-right visible-xs">
            <li class="text-center">
              <a href="#chicken-div">Chicken</a>
              <hr class="visible-xs">
            </li>            
            <li class="text-center">
              <a href="#beef-div">Beef</a>
              <hr class="visible-xs">
            </li>
            <li>
              <a href="#">
                <hr class="visible-xs">Beef</a>
            </li>
            <li>
              <a href="#">
                <hr class="visible-xs">Sushi</a>
            <li class="text-center">
              <a href="#sushi-div">Sushi</a>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  </header>
  	</header>

	<h1>Our Menu</h1>
	<h1 class="text-center">Our Menu</h1>

	<div class="row container container-fluid">
	<div class="col-md-12 col-sm-12 col-xs-12" id="chicken-div">
@@ -55,7 +54,7 @@ <h1>Our Menu</h1>
			Chicken
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac.
		</p>
		</section>
	</div>
@@ -65,7 +64,7 @@ <h1>Our Menu</h1>
			Beef
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac.
		</p>
		</section>
	</div>
@@ -75,10 +74,14 @@ <h1>Our Menu</h1>
			Sushi
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ipsum sit amet nunc posuere, at dictum massa fermentum. Sed tempor turpis quis dui pharetra, eu suscipit elit cursus. Praesent sed libero turpis. Aliquam varius elit mauris, vestibulum laoreet leo rhoncus ac. Fusce at facilisis velit. Vivamus facilisis semper risus, et efficitur justo suscipit ac.
		</p>
		</section>
	</div>
	</div>

	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
  	<script src="js/script.js"></script>
</body>
</html> 
