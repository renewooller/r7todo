import "@hotwired/turbo-rails"  
import "./controllers"  
import * as bootstrap from "bootstrap"  
  
[... document.querySelectorAll('[data-bs-toggle="popover"]')]
.map(el=>new bootstrap.Popover(el))  

