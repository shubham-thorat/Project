package Food;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.swing.*;

public class Fillform {

	private JFrame frame;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Fillform window = new Fillform();
					window.frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public Fillform() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame();
		//frame.setBounds(100, 100, 450, 300);
		
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		BufferedImage img = null;
		try {
		    img = ImageIO.read(new File("C:\\Users\\A Kumar\\Desktop\\Github\\Project\\FoodDelivery\\src\\image\\restaurant.jpg"));
		} catch (IOException e) {
		    e.printStackTrace();
		}
		
		
		Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
		frame.setSize(screenSize.width,screenSize.height);
		frame.getContentPane().setLayout(null);
		Image dimg = img.getScaledInstance(frame.getWidth(), frame.getHeight(),Image.SCALE_SMOOTH);
		
		JLabel bglabel = new JLabel("");
		bglabel.setBounds(0, 0,frame.getWidth(), frame.getHeight());
		frame.getContentPane().add(bglabel);
		
		ImageIcon imageIcon = new ImageIcon(dimg);
		bglabel.setIcon(imageIcon);
	}
}
