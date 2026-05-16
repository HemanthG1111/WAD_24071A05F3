
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CarTax extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        String price1 = req.getParameter("price");

        int price =Integer.parseInt(price1);

        double tax = price*0.20;

        double total = price+tax;

        out.println("<h2>Car Price = " + price + "</h2>");
	out.println("<h2>Tax Amount = "  + tax + " (20%)</h2>");
	out.println("<h2>Total Car Price after Tax = " + total + "</h2>");

	out.println("<h1> @24071A05F3 </h1>");

    }
}

