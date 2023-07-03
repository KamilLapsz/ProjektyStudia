package k2;
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class z3a {
    public static void main(String[] args) {
        z3a cm = new z3a();
        cm.MouseEvents();
    }

    public void MouseEvents() {
        EventQueue.invokeLater(new Runnable() {
            @Override
            public void run() {
                try {
                    UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
                } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | UnsupportedLookAndFeelException ex) {
                    ex.printStackTrace();
                }

                JFrame frame = new JFrame("Okienko");
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.add(new CirclePane());
                frame.pack();
                frame.setLocationRelativeTo(null);
                frame.setSize(800, 800);
                frame.setVisible(true);
            }
        });
    }

    static class CirclePane extends JPanel {

        private Point p = new Point(100, 100);

        public CirclePane() {
            MouseAdapter mouseHandler = new MouseAdapter() {

                @Override
                public void mouseMoved(MouseEvent e) {
                    p = e.getPoint();
                    repaint();
                }

            };
            addMouseMotionListener(mouseHandler);
        }

        @Override
        public Dimension getPreferredSize() {
            return new Dimension(200, 200);
        }

        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            Graphics2D g2d = (Graphics2D) g.create();
            g2d.setColor(Color.blue);
            g2d.fillOval(p.x - 50, p.y - 50, 100, 100);
            g2d.dispose();
        }

    }
}